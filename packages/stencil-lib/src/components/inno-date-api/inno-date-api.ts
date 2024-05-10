///////////////////////////////////////////////////////////////////
// Centralized API surface for the inno date related components.
///////////////////////////////////////////////////////////////////

/**
 *
 */
export type DateChange = {
  from: string;
  to: string;
};

export type DateChangeV2 = {
  from: DateDetails;
  to: DateDetails;
};

interface DateDetails {
  from: string;
  hour: number;
  minute: number;
  second: number;
}
