// Interface 定義
interface DocumentFragment {
    /**
     * 獲取 DocumentFragment 的 HTML 內容
     * @readonly
     */
    readonly innerHTML: string;

    /**
     * 獲取子元素的數量
     * @readonly
     */
    readonly length: number;

    /**
     * 添加子元素到 DocumentFragment
     * @param value 要添加的內容，可以是：
     * - 單個元素
     * - 文字節點
     * - 元素陣列
     * @returns DocumentFragment 實例，支援鏈式調用
     */
    _child(value: Element | string | (Element | string)[]): DocumentFragment;
}