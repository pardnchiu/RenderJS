interface Number {
    // 字符串生成與轉換
    /**
     * 生成指定長度的唯一隨機字符串
     * @readonly
     * @returns 不重複的隨機字符串（由英文和數字組成）
     * @remarks 使用當前數字作為生成長度
     */
    readonly $uniKey: string;

    /**
     * 將數字轉換為對應的 ASCII 字符
     * @readonly
     * @returns ASCII 字符
     * @example
     * const num = 65;
     * console.log(num.$ASCII); // 'A'
     */
    readonly $ASCII: string;

    // 日期相關屬性與方法
    /**
     * 將時間戳（秒）轉換為 Date 對象
     * @readonly
     * @remarks 自動將秒轉換為毫秒
     */
    readonly $date: Date;

    // 日期數值獲取（數字型）
    // 完整年份，例如：2024
    readonly $yyyy: number;
    // 月份 (1-12)
    readonly $M: number;
    // 日期 (1-31)
    readonly $D: number;
    // 星期 (0-6，0 代表週日)
    readonly $d: number;
    // 24小時制小時 (0-23)
    readonly $H: number;
    // 12小時制小時 (1-12)
    readonly $h: number;
    // 分鐘 (0-59)
    readonly $m: number;
    // 秒數 (0-59)
    readonly $s: number;

    // 日期格式化（字串型）
    // 年份後兩位，例如："24"
    readonly $y: string;
    // 同 $y
    readonly $yy: string;
    // 月份，補零 (01-12)
    readonly $MM: string;
    // 日期，補零 (01-31)
    readonly $DD: string;
    // 24小時制小時，補零 (00-23)
    readonly $HH: string;
    // 12小時制小時，補零 (01-12)
    readonly $hh: string;
    // 分鐘，補零 (00-59)
    readonly $mm: string;
    // 秒數，補零 (00-59)
    readonly $ss: string;

    // 星期表示
    // 星期極簡稱，例如："Su"、"Mo"
    readonly $dd: string;
    // 星期簡稱，例如："Sun"、"Mon"
    readonly $ddd: string;
    // 星期全稱，例如："Sunday"、"Monday"
    readonly $dddd: string;

    // 時間標識
    // 上午/下午標識 (小寫)，"am" 或 "pm"
    readonly $a: string;
    // 上午/下午標識 (大寫)，"AM" 或 "PM"
    readonly $A: string;

    // 毫秒表示
    // 毫秒百位數 (0-9)
    readonly $S: string;
    // 毫秒十位數 (00-99)
    readonly $SS: string;
    // 完整毫秒數 (000-999)
    readonly $SSS: string;

    // 相對時間
    /**
     * 計算相對於當前時間的時間差
     * @readonly
     * @returns 人性化的時間差描述
     * @example
     * const timestamp = 1645084800; // 2022-02-17
     * console.log(timestamp.$gone); // "2 年前"
     */
    readonly $gone: string;

    /**
     * 自定義格式化日期時間
     * @param format 格式化模板字串
     * @returns 格式化後的時間字串
     * @example
     * const timestamp = 1645084800;
     * console.log(timestamp.$format('YYYY-MM-DD')); // "2022-02-17"
     */
    $format(format: string): string;
}