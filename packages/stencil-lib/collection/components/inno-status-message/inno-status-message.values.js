const TYPE_INFO = {
    info: {
        typeClass: 'type-info',
        icon: 'information',
    },
    warning: {
        typeClass: 'type-warning',
        icon: 'warning_with_circle',
    },
    error: {
        typeClass: 'type-error',
        icon: 'error_with_circle',
    },
    success: {
        typeClass: 'type-success',
        icon: 'success_with_circle',
    },
};
/**
 * Return the type information or info if not found.
 */
export function getDetailsForStatusMessage(type) {
    return TYPE_INFO[type] ?? TYPE_INFO['info'];
}
//# sourceMappingURL=inno-status-message.values.js.map
