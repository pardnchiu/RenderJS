interface HTMLFormElement extends Element {
    /**
     * 將表單數據轉換為 Map 對象
     * @readonly
     * @returns Map<string, any> | undefined
     * - 若表單有效，返回包含所有表單欄位的 Map 對象：
     *   - key: 表單欄位的 name 屬性值
     *   - value: 表單欄位的值（可能是字串、檔案或其他類型）
     * - 若表單無效或不是表單元素，返回 undefined
     * 
     * @example
     * const form = document.querySelector('form');
     * const formData = form.$map;
     * if (formData) {
     *   console.log(formData.get('username'));
     * }
     */
    readonly $map: Map<string, any> | undefined;

    /**
     * 將表單數據轉換為 JSON 對象
     * @readonly
     * @returns Record<string, any> | undefined
     * - 若表單有效，返回包含所有表單欄位的普通 JavaScript 對象：
     *   - key: 表單欄位的 name 屬性值
     *   - value: 表單欄位的值（可能是字串、檔案或其他類型）
     * - 若表單無效或不是表單元素，返回 undefined
     * 
     * @example
     * const form = document.querySelector('form');
     * const formData = form.$json;
     * if (formData) {
     *   console.log(formData.username);
     * }
     */
    readonly $json: Record<string, any> | undefined;
}