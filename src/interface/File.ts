interface File {
    /**
     * 將檔案轉換為圖像
     * 
     * @param isVideo 是否為視頻檔案
     * - true: 從視頻檔案的第一幀生成圖像
     * - false: 直接將圖片檔案轉換為圖像
     * 
     * @returns 返回 Promise<Image>
     * - 成功：解析為載入完成的 Image 物件
     * - 失敗：在以下情況會拒絕 Promise：
     *   1. 檔案讀取失敗
     *   2. 圖像轉換失敗
     *   3. 畫布上下文獲取失敗
     *   4. 圖像載入失敗
     * 
     * @example
     * 處理圖片檔案
     * const image = await file.$image(false);
     * 
     * 處理視頻檔案並擷取首幀
     * const thumbnail = await videoFile.$image(true);
     */
    $image(isVideo?: boolean): Promise<Image>;
}