interface Map<K, V> {
    /**
     * 獲取 Map 中的鍵值對數量
     * @readonly
     * @returns number - Map 中的元素數量
     */
    readonly length: number;

    /**
     * 轉換為一般 JavaScript 物件
     * @readonly
     * @returns Record<string, any> - 包含所有鍵值對的物件
     * @remarks 使用 Object.fromEntries 進行轉換
     * 
     * @example
     * const map = new Map([['a', 1], ['b', 2]]);
     * console.log(map.$json); // { a: 1, b: 2 }
     */
    readonly $json: Record<string, any>;

    /**
     * 獲取所有鍵的陣列
     * @readonly
     * @returns Array - 包含所有鍵的陣列
     * 
     * @example
     * const map = new Map([['a', 1], ['b', 2]]);
     * console.log([...map.$keys]); // ['a', 'b']
     */
    readonly $keys: K[];

    /**
     * 獲取所有值的陣列
     * @readonly
     * @returns Array - 包含所有值的陣列
     * 
     * @example
     * const map = new Map([['a', 1], ['b', 2]]);
     * console.log([...map.$values]); // [1, 2]
     */
    readonly $values: V[];

    /**
     * 添加新的鍵值對
     * @param key 鍵
     * @param value 值
     * @returns Map 實例，支援鏈式調用
     * 
     * @example
     * map._('key', 'value')._('another', 123);
     */
    _(key?: K, value?: V): Map<K, V>;

    /**
     * 根據鍵獲取對應的值
     * @param key 要查找的鍵
     * @returns 對應的值，若鍵不存在則返回 undefined
     * 
     * @example
     * const value = map.$('key');
     */
    $(key?: K): V | undefined;

    /**
     * 刪除指定鍵的元素
     * @param key 要刪除的鍵
     * @returns Map 實例，支援鏈式調用
     * 
     * @example
     * map.$_('key').$_('another');
     */
    $_(key?: K): Map<K, V>;

    /**
     * 檢查包含性
     * - 提供 key 時：檢查是否包含指定鍵
     * - 未提供 key 時：檢查 Map 是否非空
     * 
     * @param key 要檢查的鍵（可選）
     * @returns boolean
     * - true：指定的鍵存在，或 Map 非空
     * - false：指定的鍵不存在，或 Map 為空
     * 
     * @example
     * 檢查特定鍵
     * if (map.$$('key')) {
     *   console.log('Key exists');
     * }
     * 
     * 檢查是否為空
     * if (map.$$()) {
     *   console.log('Map is not empty');
     * }
     */
    $$(key?: K): boolean;
}