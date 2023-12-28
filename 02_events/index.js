// node核心基于事件驱动,类似于事件总线
// node异步编程
const EventEmitter = require('events')

const emitter = new EventEmitter();

emitter.on('someEvent',(arg1,arg2)=>{
    console.log('listener1',arg1,arg2)
})

emitter.off('someEvent',(arg1,arg2)=>{
    console.log('listener1',arg1,arg2)
})

emitter.emit('someEvent','arg1','arg2')


// 返回注册事件名字
console.log(emitter.eventNames());

// 返回最大的监听器数量
console.log(emitter.getMaxListeners());

// 设置最大监听器数量
emitter.setMaxListeners(10);

// 返回特定事件名监听器
console.log(emitter.listeners('someEvent'));

// 返回特定事件监听器数量
console.log(emitter.listenerCount('someEvent'));

// 只监听一次
emitter.once('someEvent',(arg1,arg2)=>{
    console.log('listener1',arg1,arg2)
})

// 优先执行监听
emitter.prependListener('someEvent',(arg1,arg2)=>{
    console.log('listener1',arg1,arg2)
})

// 移除所有监听器， 不传参数全部移除
emitter.removeAllListeners('someEvent');