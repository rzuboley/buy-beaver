export function singleton<T extends { new (...args: any[]): Record<any, any> }>(cstr: T) {
  let instance: T | null = null

  return new Proxy(cstr, {
    construct(target, args) {
      if (!instance) {
        instance = new target(...args)
      }
      return instance
    }
  })
}
