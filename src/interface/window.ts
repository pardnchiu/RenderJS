interface Window {
    // 觀察者初始化
    /**
     * 初始化並設置觀察者
     * @param target 配置選項
     * @param target.svg SVG 觀察者
     * @param target.lazyload 懶載入觀察者
     * 
     * @example
     * 初始化所有觀察者
     * _Listener();
     * 
     * 僅初始化 SVG 觀察者
     * _Listener({ svg: true });
     */
    _Listener(target?: {
        svg?: boolean;
        lazyload?: boolean;
    }): void;

    // 檔案操作
    /**
     * 讀取檔案內容
     * @param file File 物件
     * @returns Promise<FileReader> 檔案讀取結果
     * 
     * @example
     * const result = await $file(fileInput.files[0]);
     */
    $file(file: File): Promise<any>;

    /**
     * 將 base64 字串轉換為 Blob 物件
     * @param base64 base64 編碼字串
     * @param mimeType MIME 類型
     * @returns Blob 物件
     */
    $blob(base64: string, mimeType: string): Blob;

    // Cookie 操作
    /**
     * 獲取指定 Cookie 值
     * @param key Cookie 名稱
     * @returns 
     * - 如果是 JSON 格式，返回解析後的物件
     * - 否則返回字串值
     * - 不存在時返回 undefined
     * 
     * @example
     * const value = $cookie('user_id');
     */
    $cookie(key: string): any;

    /**
     * 設置 Cookie
     * @param name Cookie 名稱
     * @param body Cookie 值（支援物件）
     * @param expire 過期時間（秒），預設 3600
     * 
     * @example
     * // 設置簡單值
     * _cookie('user_id', '123', 7200);
     * 
     * // 設置物件值
     * _cookie('user_info', { id: 123, name: 'test' }, 7200);
     */
    _cookie(name: string, body: any, expire: number): void;

    // DOM 操作
    /**
     * 選擇單個 DOM 元素
     * @param value 選擇器
     * @returns Element | undefined
     * 
     * @example
     * const elem = $('#myId');
     */
    $(value: string): Element | undefined;

    /**
     * 選擇多個 DOM 元素
     * @param value 選擇器
     * @returns Element[]
     * 
     * @example
     * const elements = $all('.myClass');
     */
    $all(value: string): Element[];

    /**
     * 添加子元素到 document.body
     * @param value 要添加的元素
     * @param before 插入位置的參考元素
     * 
     * @example
     * _child('div'._());
     * _child(['div'._(), 'p'._()]);
     */
    _child(
        value: ChildNode | Element | string | number | (ChildNode | Element | string | number)[],
        before?: ChildNode | Element | number
    ): void;

    /**
     * 重置 document.body 的子元素
     * @param value 新的子元素
     * 
     * @example
     * __child('div'._());
     */
    __child(
        value: ChildNode | Element | string | number | (ChildNode | Element | string | number)[]
    ): void;
}