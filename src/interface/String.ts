interface String {
    // RJS 渲染相關
    /**
     * 創建 RJS 渲染實例
     * @param body 配置選項，當前字串會作為 id
     * @returns RJS 實例
     */
    RJS(body: Record<string, any>): RJS;

    // JSON 處理
    /**
     * 將字串解析為 JSON 物件
     * @readonly
     * @returns 解析後的物件，解析失敗返回 undefined
     */
    readonly $json: Record<string, any> | undefined;

    /**
     * 檢查字串是否為有效的 JSON 格式
     * @readonly
     */
    readonly $$json: boolean;

    // 字串操作
    /**
     * 複製字串到系統剪貼板
     * @returns Promise<void>
     */
    copy(): Promise<void>;

    /**
     * 將字串轉換為正則表達式
     * @param flags 正則表達式旗標
     * @param force 是否自動轉義特殊字符
     */
    $regexp(flags?: string, force?: boolean): RegExp;

    /**
     * 將 base64 字串轉換為 Blob 物件
     * @param mimeType MIME 類型
     */
    $base64(mimeType: string): Blob;

    /**
     * 檢查字串匹配
     * @param value 要匹配的字串或正則表達式
     * @returns 是否匹配
     */
    $$(value?: RegExp | string): boolean;

    // HTML 相關
    /**
     * 將字串轉換為 HTML 安全的實體編碼
     * @readonly
     */
    readonly $html: string;

    // URL 相關
    /**
     * 將字串解析為 URL 物件
     * @readonly
     */
    readonly $url: URL;

    // 獲取 URL 的所有查詢參數
    readonly $queryAll: Record<string, string>;

    // 將字串轉換為 Image 物件
    readonly $img: Promise<Image>;

    /**
     * 檢查 URL 可訪問性
     * @param isImage 是否作為圖片處理
     */
    $$200(isImage?: boolean): Promise<any>;

    /**
     * 發送 HTTP 請求
     * @param body 請求體數據
     */
    $req(body: Record<string, any>): void;

    /**
     * 獲取 URL 查詢參數
     * @param key 參數名
     */
    $query(key?: string): string;

    // URL 歷史記錄操作
    // 添加歷史記錄
    _history(title?: string | number): URL;
    // 替換歷史記錄
    __history(title?: string | number): URL;

    // URL 查詢參數操作
    // 更新查詢參數
    _query(value?: Record<string, string | number>): URL;
    // 重置查詢參數
    __query(value?: Record<string, string | number>): URL;
    // 刪除指定查詢參數
    query_(value?: string | string[]): URL;
    // 清除所有查詢參數
    query__(): URL;

    // DOM 元素操作
    // 建立 Font Awesome 圖標
    readonly _fa: Element;

    // 選擇單個 DOM 元素
    readonly $: Element;

    // 選擇多個 DOM 元素
    readonly $all: Element[];

    /**
     * 創建 DOM 元素
     * @param val0 屬性或內容
     * @param val1 內容（如果 val0 為屬性）
     */
    _(val0?: any, val1?: any): Element;
}