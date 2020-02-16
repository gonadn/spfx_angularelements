import { Version } from '@microsoft/sp-core-library';
import {
    BaseClientSideWebPart,
    IPropertyPaneConfiguration,
    PropertyPaneTextField
  } from '@microsoft/sp-webpart-base';

import { escape } from '@microsoft/sp-lodash-subset';

import * as strings from 'HelloSpfxWebPartStrings';

import './../../../../SPFXAngularElements/dist/SPFXAngularElements/bundle';

export interface IHelloSpfxWebPartProps {
  description: string;
}

export default class HelloSpfxWebPart extends BaseClientSideWebPart<IHelloSpfxWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<app-hello-spfx-web-part description="${ this.properties.description }"></app-hello-spfx-web-part>`;

  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
