(function(window) {
  function Promise(executor) {
    const self = this;
    self.status = "pending"; // 状态
    self.data = undefined; //
    self.callbacks = []

    function resolve(value) {
      if(self.status !== 'pending') {
        return 
      }
      self.status = 'resolved'
      self.data = value
      if(self.callbacks.length > 0) {
        setTimeout(() => {
          self.callbacks.forEach(callbackObj => {
            callbackObj.onResolved(value)
          })
        }, 0);
      }
    }

    function reject(reason) {
      if (self.status !== "pending") {
        return;
      }
      self.status = "rejected";
      self.data = reason;
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          self.callbacks.forEach(callbackObj => {
            callbackObj.onRejected(reason);
          });
        }, 0);
      }
    }
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error)
    }
    
  }
  Promise.prototype.then = function(onResolved, onRejected) {
    const self = this
    // 指定默认值

    onResolved = typeof onResolved === 'function' ? onResolved : value => value
    onRejected = typeof onRejected === "function" ? onRejected : value => {throw value};


    return new Promise((resolve, reject) => {
      function handle(callback) {
        try {
          const result = callback(self.data);
          if (result instanceof Promise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      }
      if (self.status === "resolved") {
        setTimeout(() => {
          handle(onResolved)
        }, 0);
      } else if (self.status === "rejected") {
       setTimeout(() => {
         handle(onRejected);
       }, 0);
      } else {
        this.callbacks.push({
          onResolved: value => {
            handle(onResolved);
          },
          onRejected: reason => {
            handle(onRejected);
          }
        });
      }
    })
  };

  Promise.prototype.catch = function(onReject) {};

  Promise.resolve = function(value) {};

  Promise.reject = function(reason) {};

  Promise.all = function(promises) {
    const len = promises.length
    const values = new Array(len)
    let resolveCount = 0
    return new Promise((resolve, reject) => {
      promises.forEach((p, index) => {
        Promise.resolve(p).then(
          value => {
            resolveCount ++
            values[index] = value
            if(resolveCount === len) {
              resolve(values)
            }
          },
          reason => {
            reject(reason)
          }
        )
      })
    })
  };
  Promise.race = function(promise) {};

  window.Promise = Promise;
})(window);
