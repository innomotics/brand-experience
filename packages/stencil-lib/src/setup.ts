async function setupIcons() {
  if (typeof window === 'undefined') {
    return;
  }

  const iconComponent = window.customElements.get('ix-icon');
  if (iconComponent) {
    return;
  }

  console.warn(
    'ix-icon web component not loaded. Using local fallback version'
  );

  const ixIcons = await import('@siemens/ix-icons/loader');
  await ixIcons.defineCustomElements();
}

export default async function () {
  await setupIcons();
}
