interface Image {
    /**
     * 將圖片複製到剪貼簿
     * @param mime 圖片格式，默認為 'image/jpeg'
     * 
     * @remarks
     * - 使用異步操作，通過 navigator.clipboard API 實現
     * - 若複製失敗會在控制台輸出錯誤信息
     * 
     * @example
     * 複製為 JPEG
     * image.copy('image/jpeg');
     * 複製為 PNG
     * image.copy('image/png');
     */
    copy(mime?: string): Promise<void>;

    /**
     * 下載圖片
     * @param mime 圖片格式，默認為 'image/jpeg'
     * @param filename 下載時的檔案名稱
     * - 若未指定，會使用原圖片的檔名
     * - 若原圖片無檔名，則使用 'image.[ext]' 格式
     * 
     * @remarks
     * - 通過建立臨時 <a> 元素實現下載
     * - 下載完成後會自動清理臨時資源
     * - URL 物件會在 1 秒後自動釋放
     * 
     * @example
     * 下載 JPEG，使用默認檔名
     * image.download('image/jpeg');
     * 下載 PNG，指定檔名
     * image.download('image/png', 'my-image.png');
     */
    download(mime?: string, filename?: string): void;

    /**
     * 將圖片轉換為 base64 編碼
     * @param mime 圖片格式，默認為 'image/jpeg'
     * @param size 最大邊長（可選）
     * - 若指定 size，圖片會等比例縮放至最大邊長不超過此值
     * - 若未指定，保持原始大小
     * 
     * @remarks
     * - 使用 Canvas 進行圖片處理
     * - 預設白色背景，避免透明問題
     * - 保持原始圖片比例
     * 
     * @returns base64 編碼的圖片字串
     * 
     * @example
     * 轉換為原始大小的 JPEG
     * const base64 = image.$base64('image/jpeg');
     * 轉換為最大邊長 800px 的 PNG
     * const resizedBase64 = image.$base64('image/png', 800);
     */
    $base64(mime?: string, size?: number): string;

    /**
     * 將圖片轉換為 Blob 物件
     * @param mime 圖片格式，默認為 'image/jpeg'
     * @param size 最大邊長（可選）
     * - 若指定 size，圖片會等比例縮放至最大邊長不超過此值
     * - 若未指定，保持原始大小
     * 
     * @remarks
     * - 基於 base64 轉換實現
     * - 使用 Uint8Array 處理二進制數據
     * 
     * @returns Blob 物件
     * 
     * @example
     * 轉換為原始大小的 JPEG Blob
     * const blob = image.$blob('image/jpeg');
     * 轉換為最大邊長 800px 的 PNG Blob
     * const resizedBlob = image.$blob('image/png', 800);
     */
    $blob(mime?: string, size?: number): Blob;
}