interface Object {
    /**
     * 獲取物件的可枚舉屬性數量
     * @readonly
     * @returns 物件的鍵值對數量
     * 
     * @example
     * const obj = { a: 1, b: 2 };
     * console.log(obj.length); // 2
     */
    readonly length: number;

    /**
     * 獲取物件的所有可枚舉屬性鍵名
     * @readonly
     * @returns 包含所有屬性名稱的字串陣列
     * 
     * @example
     * const obj = { a: 1, b: 2 };
     * console.log(obj.$keys); // ['a', 'b']
     */
    readonly $keys: string[];

    /**
     * 獲取物件的所有可枚舉屬性值
     * @readonly
     * @returns 包含所有屬性值的陣列
     * 
     * @example
     * const obj = { a: 1, b: 2 };
     * console.log(obj.$values); // [1, 2]
     */
    readonly $values: any[];

    /**
     * 將物件轉換為 Map 物件
     * @readonly
     * @returns 將物件的鍵值對轉換成的 Map 實例
     * @remarks 只轉換物件自身的可枚舉屬性
     * 
     * @example
     * const obj = { a: 1, b: 2 };
     * const map = obj.$map;
     * console.log(map.get('a')); // 1
     */
    readonly $map: Map<string, any>;

    /**
     * 遍歷物件的可枚舉屬性
     * @param callback 處理每個鍵值對的回調函數
     * @remarks 
     * - 只遍歷物件自身的可枚舉屬性
     * - 如果回調函數無效，將不執行任何操作
     * 
     * @example
     * const obj = { a: 1, b: 2 };
     * obj.forEach((key, value) => {
     *   console.log(`${key}: ${value}`);
     * });
     */
    forEach(callback: (key: string, value: any) => void): void;

    /**
     * 設置或更新物件的屬性
     * @param key 屬性名稱
     * @param value 屬性值
     * @param replace 是否替換已存在的值（預設為 true）
     * @returns 更新後的物件
     * @remarks
     * - key 必須是非空字串
     * - value 不能是 undefined
     * - 若 replace 為 false 且屬性已存在，則不會更新該屬性
     * 
     * @example
     * const obj = { a: 1 };
     * 添加新屬性
     * obj._('b', 2);
     * 不替換已存在的屬性
     * obj._('a', 3, false);
     */
    _(key: string, value: any, replace?: boolean): Record<string, any>;

    /**
     * 檢查物件的屬性或非空狀態
     * @param key 要檢查的屬性名稱（可選）
     * @returns 
     * - 提供 key 時：返回是否存在該屬性
     * - 未提供 key 時：返回物件是否非空
     * 
     * @example
     * const obj = { a: 1 };
     * console.log(obj.$$('a')); // true
     * console.log(obj.$$('b')); // false
     * console.log(obj.$$()); // true
     */
    $$(key?: string): boolean;
}