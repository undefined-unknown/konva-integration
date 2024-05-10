declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    toolName: StringConstructor;
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    toolName: StringConstructor;
}>> & {
    onClose?: (() => any) | undefined;
}, {}, {}>, {
    header?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
