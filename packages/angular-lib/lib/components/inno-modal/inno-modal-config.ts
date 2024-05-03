////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Copied from the the original Siemens IX library.
///
/// Reference: https://github.com/siemens/ix/blob/main/packages/angular/src/modal/modal.config.ts
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { TemplateRef, Type } from "@angular/core";
import { ModalConfig as InnoModalConfig } from "@innomotics/brand-experience";

export type ModalConfig<TDATA = any> = Omit<InnoModalConfig, "content"> & {
  content: TemplateRef<unknown> | Type<unknown>;
  data?: TDATA;
};
