import { InnoButton, showStatusMessage } from "@innomotics/brand-experience-react-lib";

export function InnoStatusMessageExample() {
  return (
    <>
      <InnoButton
        onClick={() => {
          showStatusMessage({
            message: "My toast message!",
            showProgress: true,
            theme: "dark",
            type: "success",
          });
        }}
      >
        Trigger status message
      </InnoButton>
    </>
  );
}
