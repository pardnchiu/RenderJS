interface Date {
    // 基本日期元件 (數值型)
    // 完整年份，例如：2024
    readonly $yyyy: number;
    // 月份 (1-12)
    readonly $M: number;
    // 日期 (1-31)
    readonly $D: number;
    // 星期 (0-6，0 代表星期日)
    readonly $d: number;
    // 24小時制小時 (0-23)
    readonly $H: number;
    // 12小時制小時 (1-12)
    readonly $h: number;
    // 分鐘 (0-59)
    readonly $m: number;
    // 秒數 (0-59)
    readonly $s: number;

    // 補零格式化 (字串型)
    // 二位數年份，例如："24"
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

    // 時間戳與相對時間
    // Unix 時間戳（秒）
    readonly $timestamp: number;
    // 相對時間描述，例如："2 天前" 或 "3 天後"
    readonly $gone: string;

    // 方法
    /**
     * 自定義格式化日期字串
     * @param format 格式化模板，例如："YYYY-MM-DD HH:mm:ss"
     * @returns 格式化後的日期字串
     */
    $format(format?: string): string;

    /**
     * 根據指定條件生成新的日期對象
     * @param body 配置選項
     * @param body.start 當月首日
     * @param body.end 當月末日
     * @param body.pre.start 上月首日
     * @param body.pre.end 上月末日
     * @returns 新的日期對象
     */
    $date(body?: {
        start?: boolean;
        end?: boolean;
        pre?: {
            start?: boolean;
            end?: boolean;
        };
    }): Date;
}