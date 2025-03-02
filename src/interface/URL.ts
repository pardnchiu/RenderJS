interface URL {
    // 查詢參數操作
    /**
     * 獲取所有查詢參數
     * @readonly
     * @returns Record<string, string> 包含所有查詢參數的物件
     */
    readonly $queryAll: Record<string, string>;

    /**
     * 獲取指定查詢參數值
     * @param key 參數名稱
     * @returns 參數值，不存在時返回 undefined
     */
    $query(key?: string): string | undefined;

    // 圖片處理
    /**
     * 將 URL 指向的資源轉換為 Image 物件
     * @readonly
     * @returns Promise<Image> 載入完成的圖片
     * @remarks 自動設置 crossOrigin 為 'anonymous'
     */
    readonly $image: Promise<Image>;

    /**
     * 檢查 URL 可訪問性
     * @param isImage 是否以圖片方式處理回應
     * @returns Promise<Response | {src: string, img: Image}>
     * @remarks
     * - 對於圖片資源，返回包含圖片資訊的物件
     * - 對於其他資源，返回 Response 物件
     */
    $$200(isImage?: boolean): Promise<any>;

    // HTTP 請求
    /**
     * 發送 HTTP 請求
     * @param body 請求配置
     * @param body.method HTTP 方法，默認為 "GET"
     * @param body.json 請求的 JSON 數據
     * @param body.header 請求標頭
     * @param body.credentials 是否包含憑證
     * @param body.files 要上傳的檔案陣列
     * @param body.tag 檔案上傳時的欄位名稱
     * @param once 是否限制同一 URL 只能有一個進行中的請求
     * @returns Promise<{data: any, status: number}>
     * 
     * @example
     * 發送 JSON 請求
     * url.$req({
     *   method: "POST",
     *   json: { data: "test" },
     *   header: { "Content-Type": "application/json" }
     * });
     * 
     * 上傳檔案
     * url.$req({
     *   method: "POST",
     *   files: fileList,
     *   tag: "images[]"
     * });
     */
    $req(body: {
        method?: string;
        json?: Record<string, any>;
        header?: Record<string, string>;
        credentials?: boolean;
        files?: File[];
        tag?: string;
    }, once?: boolean): Promise<any>;

    // 瀏覽器歷史記錄操作
    /**
     * 添加新的歷史記錄
     * @param title 可選的頁面標題
     * @returns URL 實例，支援鏈式調用
     */
    _history(title?: string | number): URL;

    /**
     * 替換當前歷史記錄
     * @param title 可選的頁面標題
     * @returns URL 實例，支援鏈式調用
     */
    __history(title?: string | number): URL;

    // URL 查詢參數操作
    /**
     * 添加或更新查詢參數
     * @param value 要添加的參數鍵值對
     * @returns 新的 URL 實例
     */
    _query(value?: Record<string, string | number>): URL;

    /**
     * 重置查詢參數
     * @param value 新的參數鍵值對
     * @returns 新的 URL 實例
     */
    __query(value?: Record<string, string | number>): URL;

    /**
     * 移除指定查詢參數
     * @param value 要移除的參數名稱或名稱陣列
     * @returns 新的 URL 實例
     */
    query_(value?: string | string[]): URL;

    /**
     * 清除所有查詢參數
     * @returns 新的 URL 實例
     */
    query__(): URL;
}