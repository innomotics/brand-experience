import { NgControl } from "@angular/forms";
import { InnoRadioValueAccessor } from "./inno-radio-value-accessor";
import { Injectable } from "@angular/core";

/**
 * Store the inno-radio controls
 * and provide a high-level control like unselect value.
 *
 * The original Angular registry was modified to store the inno radio controls.
 * https://github.com/angular/angular/blob/main/packages/forms/src/directives/radio_control_value_accessor.ts
 */
// @Injectable({ providedIn: "root" })
export class InnoRadioControlRegistry {
  private accessors: any[] = [];

  /**
   * Adds a control to the internal registry.
   */
  add(control: NgControl, accessor: InnoRadioValueAccessor) {
    this.accessors.push([control, accessor]);
  }

  /**
   * Removes a control from the internal registry.
   */
  remove(accessor: InnoRadioValueAccessor) {
    for (let i = this.accessors.length - 1; i >= 0; --i) {
      if (this.accessors[i][1] === accessor) {
        this.accessors.splice(i, 1);
        return;
      }
    }
  }

  /**
   * Selects a radio control
   * and unselect the other controls.
   */
  select(accessor: InnoRadioValueAccessor) {
    this.accessors.forEach((c) => {
      if (this.isSameGroup(c, accessor)) {
        // && c[1] !== accessor should write value to all controls
        c[1].fireUncheck(accessor.value);
      }
    });
  }

  private isSameGroup(
    controlPair: [NgControl, InnoRadioValueAccessor],
    accessor: InnoRadioValueAccessor
  ): boolean {
    if (!controlPair[0].control) return false;

    return (
      (controlPair[0] as any)._parent === (accessor as any).control._parent &&
      controlPair[1].name === accessor.name
    );
  }
}
