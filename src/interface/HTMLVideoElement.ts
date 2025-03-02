interface HTMLVideoElement extends Element {
    /**
     * 配置視頻元素的播放行為和控制選項
     * @param value 配置選項物件，包含以下可選屬性：
     * 
     * @param value.preload - 預載入行為
     * - 類型：string
     * - 可選值：'none' | 'metadata' | 'auto'
     * - 說明：指定視頻如何預載入
     * 
     * @param value.loop - 循環播放
     * - 類型：boolean
     * - 說明：設置視頻是否循環播放
     * 
     * @param value.muted - 靜音
     * - 類型：boolean
     * - 說明：設置視頻是否靜音播放
     * 
     * @param value.controls - 控制列
     * - 類型：boolean
     * - 說明：是否顯示視頻控制列
     * 
     * @param value.playsinline - 行內播放
     * - 類型：boolean
     * - 說明：在 iOS 設備上啟用行內播放（不會自動全屏）
     * 
     * @param value.download - 下載控制
     * - 類型：boolean
     * - 說明：是否允許下載視頻
     * - false 時會在控制列中禁用下載按鈕
     * 
     * @param value.remote - 遠程播放控制
     * - 類型：boolean
     * - 說明：是否允許遠程播放
     * - false 時會禁用遠程播放功能
     * 
     * @returns HTMLVideoElement 實例，支援鏈式調用
     * 
     * @example
     * 基本配置
     * video._config({
     *   preload: 'auto',
     *   muted: true,
     *   controls: true
     * });
     * 
     * 移動裝置優化配置
     * video._config({
     *   playsinline: true,
     *   download: false,
     *   remote: false
     * });
     * 
     * 鏈式調用
     * video._config({
     *   muted: true,
     *   loop: true
     * })._class('custom-video');
     */
    _config(value: {
        preload?: string;
        loop?: boolean;
        muted?: boolean;
        controls?: boolean;
        playsinline?: boolean;
        download?: boolean;
        remote?: boolean;
    }): HTMLVideoElement;
}