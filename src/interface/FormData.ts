interface FormData {
    /**
     * 將 FormData 轉換為 Map 物件
     * @readonly
     * @returns Map 物件，包含所有表單欄位的鍵值對
     * - key: 表單欄位名稱
     * - value: 表單欄位值（可能是字串、檔案或其他類型）
     * 
     * @example
     * const formData = new FormData(form);
     * const map = formData.$map;
     * console.log(map.get('fieldName'));
     */
    readonly $map: Map<string, any>;

    /**
     * 將 FormData 轉換為 JSON 物件
     * @readonly
     * @returns 一般的 JavaScript 物件，包含所有表單欄位的鍵值對
     * - key: 表單欄位名稱
     * - value: 表單欄位值（可能是字串、檔案或其他類型）
     * 
     * @example
     * const formData = new FormData(form);
     * const json = formData.$json;
     * console.log(json.fieldName);
     */
    readonly $json: Record<string, any>;
}