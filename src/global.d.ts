declare module '*.module.scss' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
  }

  declare module '*.svg'
  declare module '*.jpg'
  declare module '*.jpeg'
  declare module '*.png'
  declare module '*.gif' 