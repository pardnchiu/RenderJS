interface HTMLElement extends Element {
    // 顯示控制
    /**
     * 設置元素的 display 樣式
     * @param value display 的值，例如：'block'、'flex'、'none' 等
     */
    display(value?: string): HTMLElement;

    // 尺寸設置
    /**
     * 設置元素的寬度
     * @param value 寬度值，數字會自動加上 px 單位
     */
    width(value?: number | string): HTMLElement;

    /**
     * 設置元素的高度
     * @param value 高度值，數字會自動加上 px 單位
     */
    height(value?: number | string): HTMLElement;

    // 內邊距（Padding）控制
    /**
     * 一次性設置所有內邊距
     * @param top 上內邊距值
     * @param right 右內邊距值（可選）
     * @param bottom 下內邊距值（可選）
     * @param left 左內邊距值（可選）
     * 
     * 支援以下使用方式：
     * 1. padding(value)
     *    - 設置四個方向相同的內邊距
     *    - 例：padding(10) → padding: 10px 10px 10px 10px
     * 
     * 2. padding(vertical, horizontal)
     *    - 分別設置垂直和水平方向的內邊距
     *    - 例：padding(10, 20) → padding: 10px 20px 10px 20px
     * 
     * 3. padding(top, horizontal, bottom)
     *    - 分別設置上、左右、下的內邊距
     *    - 例：padding(10, 20, 30) → padding: 10px 20px 30px 20px
     * 
     * 4. padding(top, right, bottom, left)
     *    - 分別設置四個方向的內邊距
     *    - 例：padding(10, 20, 30, 40) → padding: 10px 20px 30px 40px
     * 
     * @returns HTMLElement 實例，支援鏈式調用
     */
    padding(top: number | string, right?: number | string, bottom?: number | string, left?: number | string): HTMLElement;

    /**
     * 設置上內邊距
     * @param value 內邊距值，數字會自動加上 px 單位
     */
    paddingTop(value?: number | string): HTMLElement;

    /**
     * 設置右內邊距
     * @param value 內邊距值，數字會自動加上 px 單位
     */
    paddingRight(value?: number | string): HTMLElement;

    /**
     * 設置下內邊距
     * @param value 內邊距值，數字會自動加上 px 單位
     */
    paddingBottom(value?: number | string): HTMLElement;

    /**
     * 設置左內邊距
     * @param value 內邊距值，數字會自動加上 px 單位
     */
    paddingLeft(value?: number | string): HTMLElement;

    // 外邊距（Margin）控制
    /**
     * 一次性設置所有外邊距
     * @param top 上外邊距值
     * @param right 右外邊距值（可選）
     * @param bottom 下外邊距值（可選）
     * @param left 左外邊距值（可選）
     * 
     * 支援以下使用方式：
     * 1. margin(value)
     *    - 設置四個方向相同的外邊距
     *    - 例：margin(10) → margin: 10px 10px 10px 10px
     * 
     * 2. margin(vertical, horizontal)
     *    - 分別設置垂直和水平方向的外邊距
     *    - 例：margin(10, 20) → margin: 10px 20px 10px 20px
     * 
     * 3. margin(top, horizontal, bottom)
     *    - 分別設置上、左右、下的外邊距
     *    - 例：margin(10, 20, 30) → margin: 10px 20px 30px 20px
     * 
     * 4. margin(top, right, bottom, left)
     *    - 分別設置四個方向的外邊距
     *    - 例：margin(10, 20, 30, 40) → margin: 10px 20px 30px 40px
     * 
     * @returns HTMLElement 實例，支援鏈式調用
     */
    margin(top: number | string, right?: number | string, bottom?: number | string, left?: number | string): HTMLElement;

    /**
     * 設置上外邊距
     * @param value 外邊距值，數字會自動加上 px 單位
     */
    marginTop(value?: number | string): HTMLElement;

    /**
     * 設置右外邊距
     * @param value 外邊距值，數字會自動加上 px 單位
     */
    marginRight(value?: number | string): HTMLElement;

    /**
     * 設置下外邊距
     * @param value 外邊距值，數字會自動加上 px 單位
     */
    marginBottom(value?: number | string): HTMLElement;

    /**
     * 設置左外邊距
     * @param value 外邊距值，數字會自動加上 px 單位
     */
    marginLeft(value?: number | string): HTMLElement;

    // 滾動控制
    /**
     * 設置水平滾動位置
     * @param value 目標滾動位置（像素）
     * @param animation 是否使用平滑滾動動畫
     */
    scrollToX(value: number, animation?: boolean): HTMLElement;

    /**
     * 設置垂直滾動位置
     * @param value 目標滾動位置（像素）
     * @param animation 是否使用平滑滾動動畫
     */
    scrollToY(value: number, animation?: boolean): HTMLElement;

    /**
     * 滾動到頂部
     * @param animation 是否使用平滑滾動動畫
     */
    scrollToT(animation?: boolean): HTMLElement;

    /**
     * 滾動到最左側
     * @param animation 是否使用平滑滾動動畫
     */
    scrollToL(animation?: boolean): HTMLElement;

    /**
     * 滾動到底部
     * @param animation 是否使用平滑滾動動畫
     */
    scrollToB(animation?: boolean): HTMLElement;

    /**
     * 滾動到最右側
     * @param animation 是否使用平滑滾動動畫
     */
    scrollToR(animation?: boolean): HTMLElement;
}