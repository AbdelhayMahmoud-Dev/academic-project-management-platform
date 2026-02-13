import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { CardComponent } from './ui/card/card.component';
import { TableComponent } from './ui/table/table.component';
import { InputComponent } from './ui/input/input.component';
import { ButtonComponent } from './ui/button/button.component';
import { ToastComponent } from './ui/toast/toast.component';
import { ErrorStateComponent } from './ui/error-state/error-state.component';
import { LoadingComponent } from './ui/loading/loading.component';
import { EmptyComponent } from './ui/states/empty/empty.component.ts';
import { ModalHostComponent } from './ui/modal/modal.host.component';

import { AutofocusDirective } from './directives/autofocus.directive';
import { FeatureDirective } from './directives/feature.directive';
import { PermissionDirective } from './directives/permission.directive';

import { SafeHtmlPipe } from './directives/pipes/safe-html.pipe';

export const SharedUiImports = [
  CommonModule,
  FormsModule,

  PageWrapperComponent,
  CardComponent,
  TableComponent,
  InputComponent,
  ButtonComponent,
  ToastComponent,
  ErrorStateComponent,
  LoadingComponent,
  EmptyComponent,
  ModalHostComponent,

  AutofocusDirective,
  FeatureDirective,
  PermissionDirective,

  SafeHtmlPipe,
];