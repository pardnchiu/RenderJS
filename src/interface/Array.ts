interface Array<T> {
    // 計算屬性
    /**
     * 計算數值陣列中所有元素的總和
     */
    readonly $sum: number;

    /**
     * 返回隨機打亂元素順序後的陣列
     */
    readonly $shuffle: Array<T>;

    /**
     * 將陣列轉換為 Map，key 為元素值，value 為索引
     */
    readonly $map: Map<T, number>;

    // 陣列操作方法
    /**
     * 在指定索引處插入元素
     * @param value 要插入的單個值或陣列
     * @param index 插入位置，支援正負索引，默認為陣列末尾
     * @returns 修改後的陣列
     */
    _(value: T | T[], index?: number): Array<T>;

    /**
     * 獲取指定索引的元素
     * @param index 目標索引，支援正負索引
     * @returns 目標元素，若索引無效則返回 undefined
     */
    $(index: number): T | undefined;

    /**
     * 查找元素的索引
     * @param target 要查找的元素
     * @returns 元素的索引，不存在則返回 undefined
     */
    $i(target: T): number | undefined;

    /**
     * 移除指定索引的元素
     * @param index 要移除的索引位置，支援正負索引
     * @returns 修改後的陣列
     */
    $_(index: number): Array<T>;

    /**
     * 檢查元素存在性或陣列非空性
     * @param target 可選，要檢查的特定元素
     * @returns 如果目標存在或陣列非空則返回 true
     */
    $$(target?: T): boolean;

    // URL 相關方法
    /**
     * 將陣列元素作為路徑段落組合成 URL 並發送請求
     * @param body 請求體數據
     */
    $req(body: Record<string, any>): void;
}