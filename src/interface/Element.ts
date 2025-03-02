interface Element {
    // 基本屬性
    // 子元素數量
    readonly length: number;

    // 元素在父元素中的索引位置
    readonly $i: number;

    // 元素的所有屬性鍵值對
    readonly $attributes: Record<string, string>;

    // 內容操作
    /**
     * 在元素內容末尾添加文字
     * @param value 要添加的文字或數值
     */
    _(value: string | number): Element;

    /**
     * 替換元素的全部內容
     * @param value 新的內容
     */
    __(value?: string | number): Element;

    // 樣式操作
    /**
     * 設置元素的多個樣式
     * @param value 樣式屬性和值的鍵值對
     */
    _style(value: Record<string, string>): Element;

    /**
     * 移除指定的樣式
     * @param value 要移除的樣式名稱，可以是字串或字串陣列
     */
    style_(value: string | string[]): Element;

    /**
     * 獲取指定樣式的值
     * @param value 樣式名稱
     */
    $style(value: string): string | undefined;

    // 資料屬性操作
    /**
     * 設置多個 data 屬性
     * @param value data 屬性和值的鍵值對
     */
    _data(value: Record<string, string | number>): Element;

    /**
     * 移除指定的 data 屬性
     * @param value 要移除的屬性名稱，可以是字串或字串陣列
     */
    data_(value: string | string[]): Element;

    /**
     * 獲取指定 data 屬性的值
     * @param value 屬性名稱
     */
    $data(value: string): string | undefined;

    /**
     * 檢查 data 屬性
     * @param key 屬性名稱
     * @param value 可選的屬性值進行比對
     */
    $$data(key: string, value?: string): boolean;

    // 一般屬性操作
    /**
     * 設置多個屬性
     * @param value 屬性和值的鍵值對
     */
    _attr(value: Record<string, string | number>): Element;

    /**
     * 移除指定的屬性
     * @param value 要移除的屬性名稱，可以是字串或字串陣列
     */
    attr_(value: string | string[]): Element;

    /**
     * 獲取指定屬性的值
     * @param value 屬性名稱
     */
    $attr(value: string): string | undefined;

    /**
     * 檢查屬性
     * @param key 屬性名稱
     * @param value 可選的屬性值進行比對
     */
    $$attr(key: string, value?: string): boolean;

    // 類別操作
    /**
     * 添加類別
     * @param value 類別名稱，可以是字串或字串陣列
     */
    _class(value: string | string[]): Element;

    /**
     * 設置類別（替換現有類別）
     * @param value 類別名稱，可以是字串或字串陣列
     */
    __class(value?: string | string[]): Element;

    /**
     * 移除指定的類別
     * @param value 要移除的類別名稱，可以是字串或字串陣列
     */
    class_(value: string | string[]): Element;

    // 移除所有類別
    class__(): Element;

    /**
     * 檢查是否包含指定類別
     * @param value 類別名稱
     */
    $$class(value: string | string[]): boolean;

    /**
     * 根據條件切換類別
     * @param bool 條件
     * @param value 類別名稱
     */
    $$class_(bool?: boolean, value?: string | string[]): Element;

    // 子元素操作
    /**
     * 添加子元素
     * @param content 要添加的內容
     * @param before 可選的插入位置
     */
    _child(content: any, before?: Element | number): Element;

    /**
     * 替換所有子元素
     * @param content 新的子元素內容
     */
    __child(content: any): Element;

    /**
     * 獲取指定的子元素
     * @param value 索引或選擇器
     */
    $child(value?: string | number | (string | number)[]): Element | undefined;

    /**
     * 添加多個子元素
     * @param args 子元素列表
     */
    $addChildren(...args: any[]): Element;

    /**
     * 添加單個子元素
     * @param value 子元素
     */
    $addChild(value?: any): Element;

    // 元素導航
    /**
     * 獲取父元素
     * @param layer 向上層級數
     */
    $parent(layer?: number): Element | undefined;

    /**
     * 獲取前一個兄弟元素
     * @param steps 向前步數
     */
    $pre(steps?: number): Element | undefined;

    /**
     * 獲取後一個兄弟元素
     * @param steps 向後步數
     */
    $next(steps?: number): Element | undefined;

    // 選擇器方法
    /**
     * 使用選擇器查找單個元素
     * @param selector CSS 選擇器
     */
    $sel(selector: string): Element | undefined;

    /**
     * 使用選擇器查找多個元素
     * @param selector CSS 選擇器
     */
    $selAll(selector: string): Element[];

    // 事件處理
    /**
     * 添加事件處理器
     * @param event 事件處理函數
     */
    _event(event: Function | null): Element;
}