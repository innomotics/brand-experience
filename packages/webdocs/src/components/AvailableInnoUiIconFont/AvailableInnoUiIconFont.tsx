// Innomotics UI icon font start and stop glyph indexes
const startIndex = 59648;
const stopIndex = 59809;

/**
 * Show the available icons for the Innomotics UI font.
 */
export default function AvailableInnoUiIconFont(): JSX.Element {
  const icons: React.JSX.Element[] = [];

  let index = startIndex;
  while (index < stopIndex) {
    const hexaForm = Number(index).toString(16);
    const iconForm = String.fromCodePoint(parseInt(hexaForm, 16));

    const item = (
      <div className="font-display-item">
        <span className="InnomoticsUiIcons">{iconForm}</span>
        <span>{hexaForm}</span>
      </div>
    );
    icons.push(item);

    index += 1;
  }

  return <div className="font-display-container">{icons}</div>;
}
