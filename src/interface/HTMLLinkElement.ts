interface HTMLLinkElement extends Element {
    /**
     * 設置連結目標 URL 並在當前視窗開啟
     * @param value 目標 URL
     * - 若提供的 URL 為空字串或空白字元，href 屬性不會被修改
     * - 無論 URL 是否有效，都會將 target 設為 "_self"
     * 
     * @returns HTMLLinkElement 實例，支援鏈式調用
     * 
     * @example
     * 在當前視窗開啟連結
     * link._go("https://example.com");
     * 
     * 鏈式調用
     * link._go("https://example.com")._class("active");
     */
    _go(value: string): HTMLLinkElement;

    /**
     * 設置連結目標 URL 並在新視窗開啟
     * @param value 目標 URL
     * - 若提供的 URL 為空字串或空白字元，href 屬性不會被修改
     * - 無論 URL 是否有效，都會將 target 設為 "_blank"
     * 
     * @returns HTMLLinkElement 實例，支援鏈式調用
     * 
     * @example
     * 在新視窗開啟連結
     * link._open("https://example.com");
     * 
     * 鏈式調用
     * link._open("https://example.com")._class("external");
     */
    _open(value: string): HTMLLinkElement;
}