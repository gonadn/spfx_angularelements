declare interface IHelloSpfxWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'HelloSpfxWebPartStrings' {
  const strings: IHelloSpfxWebPartStrings;
  export = strings;
}
