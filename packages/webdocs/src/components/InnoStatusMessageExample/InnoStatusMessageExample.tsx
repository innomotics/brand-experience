import { InnoButton, showStatusMessage } from "@innomotics/brand-experience-react-lib";

export default function InnoStatusMessageExample() {
  return (
    <>
      <InnoButton
        onClick={() => {
          showStatusMessage({
            message: "Status message text",
            showProgress: true,
            theme: "dark",
            type: "success",
            position: "bottom-right",
          });
        }}
      >
        Show status message
      </InnoButton>
    </>
  );
}
