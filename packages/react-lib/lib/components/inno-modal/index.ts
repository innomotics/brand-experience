////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Copied from the the original Siemens IX library.
///
/// Reference: https://github.com/siemens/ix/blob/main/packages/angular/src/modal/modal.service.ts
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import {
  ModalConfig as InnoModalConfig,
  showModal as _showModal,
} from "@innomotics/brand-experience";
export * from "./modal";

export type ModalConfig = {
  content: React.ReactNode | string;
};

export async function showModal(
  config: Omit<InnoModalConfig, "content"> & ModalConfig
) {
  return _showModal(config);
}
