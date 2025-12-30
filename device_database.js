/**
 * iPhone 设备数据库
 * 包含 IMEI TAC 码映射和设备型号信息
 * 用于在没有预存报告时，通过 IMEI/序列号识别设备型号
 */

const DeviceDatabase = {
    // IMEI 前8位 (TAC) 到设备型号的映射
    // TAC = Type Allocation Code，可以确定设备制造商和型号
    tacDatabase: {
        // iPhone 16 Pro Max
        "35368866": { model: "iPhone 16 Pro Max", identifier: "iPhone17,2" },
        "35364828": { model: "iPhone 16 Pro Max", identifier: "iPhone17,2" },
        "35348462": { model: "iPhone 16 Pro Max", identifier: "iPhone17,2" },

        // iPhone 16 Pro
        "35366889": { model: "iPhone 16 Pro", identifier: "iPhone17,1" },
        "35341785": { model: "iPhone 16 Pro", identifier: "iPhone17,1" },

        // iPhone 16 Plus
        "35340025": { model: "iPhone 16 Plus", identifier: "iPhone17,4" },
        "35047039": { model: "iPhone 16 Plus", identifier: "iPhone17,4" },

        // iPhone 16
        "35633087": { model: "iPhone 16", identifier: "iPhone17,3" },
        "35616689": { model: "iPhone 16", identifier: "iPhone17,3" },
        "35620732": { model: "iPhone 16", identifier: "iPhone17,3" },
        "35128085": { model: "iPhone 16", identifier: "iPhone17,3" },
        "35193556": { model: "iPhone 16", identifier: "iPhone17,3" },
        "35075369": { model: "iPhone 16", identifier: "iPhone17,3" },
        "35047039": { model: "iPhone 16", identifier: "iPhone17,3" },
        "35410435": { model: "iPhone 16", identifier: "iPhone17,3" },
        "35337265": { model: "iPhone 16", identifier: "iPhone17,3" },
        "35969688": { model: "iPhone 16", identifier: "iPhone17,3" },
        "35417850": { model: "iPhone 16", identifier: "iPhone17,3" },
        "35776226": { model: "iPhone 16", identifier: "iPhone17,3" },

        // iPhone 15 Pro Max
        "35989765": { model: "iPhone 15 Pro Max", identifier: "iPhone16,2" },
        "35536428": { model: "iPhone 15 Pro Max", identifier: "iPhone16,2" },

        // iPhone 15 Pro
        "35535285": { model: "iPhone 15 Pro", identifier: "iPhone16,1" },

        // iPhone 15 Plus
        "35476338": { model: "iPhone 15 Plus", identifier: "iPhone15,5" },

        // iPhone 15
        "35632125": { model: "iPhone 15", identifier: "iPhone15,4" },
        "35399231": { model: "iPhone 15", identifier: "iPhone15,4" },
        "35801994": { model: "iPhone 15", identifier: "iPhone15,4" },
        "35356291": { model: "iPhone 15", identifier: "iPhone15,4" },
        "35565691": { model: "iPhone 15", identifier: "iPhone15,4" },
        "35801990": { model: "iPhone 15", identifier: "iPhone15,4" },
        "35317764": { model: "iPhone 15", identifier: "iPhone15,4" },
        "35104887": { model: "iPhone 15", identifier: "iPhone15,4" },
        "35169847": { model: "iPhone 15", identifier: "iPhone15,4" },
        "35388719": { model: "iPhone 15", identifier: "iPhone15,4" },
        "35355095": { model: "iPhone 15", identifier: "iPhone15,4" },
        "35835584": { model: "iPhone 15", identifier: "iPhone15,4" },
        "35777020": { model: "iPhone 15", identifier: "iPhone15,4" },
        "35366225": { model: "iPhone 15", identifier: "iPhone15,4" },
        "35714682": { model: "iPhone 15", identifier: "iPhone15,4" },
        "35045024": { model: "iPhone 15", identifier: "iPhone15,4" },
        "35133541": { model: "iPhone 15", identifier: "iPhone15,4" },
        "35215654": { model: "iPhone 15", identifier: "iPhone15,4" },
        "35402928": { model: "iPhone 15", identifier: "iPhone15,4" },

        // iPhone 14 Pro Max
        "35435458": { model: "iPhone 14 Pro Max", identifier: "iPhone15,3" },

        // iPhone 14 Pro
        "35434028": { model: "iPhone 14 Pro", identifier: "iPhone15,2" },

        // iPhone 14 Plus
        "35476300": { model: "iPhone 14 Plus", identifier: "iPhone14,8" },

        // iPhone 14
        "35369176": { model: "iPhone 14", identifier: "iPhone14,7" },

        // iPhone 13 Pro Max
        "35388914": { model: "iPhone 13 Pro Max", identifier: "iPhone14,3" },

        // iPhone 13 Pro
        "35389914": { model: "iPhone 13 Pro", identifier: "iPhone14,2" },

        // iPhone 13
        "35889014": { model: "iPhone 13", identifier: "iPhone14,5" },
        "35361826": { model: "iPhone 13", identifier: "iPhone14,5" },
        "35348794": { model: "iPhone 13", identifier: "iPhone14,5" },
        "35583999": { model: "iPhone 13", identifier: "iPhone14,5" },
        "35510682": { model: "iPhone 13", identifier: "iPhone14,5" },
        "35565792": { model: "iPhone 13", identifier: "iPhone14,5" },
        "35827580": { model: "iPhone 13", identifier: "iPhone14,5" },
        "35575494": { model: "iPhone 13", identifier: "iPhone14,5" },
        "35859852": { model: "iPhone 13", identifier: "iPhone14,5" },
        "35854110": { model: "iPhone 13", identifier: "iPhone14,5" },
        "35612917": { model: "iPhone 13", identifier: "iPhone14,5" },
        "35040828": { model: "iPhone 13", identifier: "iPhone14,5" },
        "35857594": { model: "iPhone 13", identifier: "iPhone14,5" },
        "35472723": { model: "iPhone 13", identifier: "iPhone14,5" },
        "35619250": { model: "iPhone 13", identifier: "iPhone14,5" },
        "35327271": { model: "iPhone 13", identifier: "iPhone14,5" },
        "35754217": { model: "iPhone 13", identifier: "iPhone14,5" },
        "35637851": { model: "iPhone 13", identifier: "iPhone14,5" },
        "35260314": { model: "iPhone 13", identifier: "iPhone14,5" },

        // iPhone 13 mini
        "35388013": { model: "iPhone 13 mini", identifier: "iPhone14,4" },

        // iPhone 12 Pro Max
        "35353117": { model: "iPhone 12 Pro Max", identifier: "iPhone13,4" },

        // iPhone 12 Pro
        "35352011": { model: "iPhone 12 Pro", identifier: "iPhone13,3" },

        // iPhone 12
        "35305911": { model: "iPhone 12", identifier: "iPhone13,2" },
        "35403228": { model: "iPhone 12", identifier: "iPhone13,2" },
        "35483414": { model: "iPhone 12", identifier: "iPhone13,2" },
        "35910597": { model: "iPhone 12", identifier: "iPhone13,2" },
        "35963726": { model: "iPhone 12", identifier: "iPhone13,2" },
        "35648651": { model: "iPhone 12", identifier: "iPhone13,2" },
        "35087192": { model: "iPhone 12", identifier: "iPhone13,2" },
        "35659914": { model: "iPhone 12", identifier: "iPhone13,2" },

        // iPhone 12 mini
        "35351912": { model: "iPhone 12 mini", identifier: "iPhone13,1" },

        // iPhone SE (3rd gen)
        "35398817": { model: "iPhone SE (3rd generation)", identifier: "iPhone14,6" },

        // iPhone SE (2nd gen)
        "35324590": { model: "iPhone SE (2nd generation)", identifier: "iPhone12,8" },

        // iPhone 11 Pro Max
        "35391810": { model: "iPhone 11 Pro Max", identifier: "iPhone12,5" },

        // iPhone 11 Pro
        "35390710": { model: "iPhone 11 Pro", identifier: "iPhone12,3" },

        // iPhone 11
        "35388610": { model: "iPhone 11", identifier: "iPhone12,1" },
    },

    // 设备完整信息数据库
    deviceInfo: {
        "iPhone17,2": {
            name: "iPhone 16 Pro Max",
            display: "6.9 inch Super Retina XDR",
            chip: "A18 Pro",
            storageOptions: ["256GB", "512GB", "1TB"],
            colorOptions: {
                zh: ["黑色钛金属", "白色钛金属", "原色钛金属", "沙漠色钛金属"],
                en: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"]
            },
            releaseYear: 2024
        },
        "iPhone17,1": {
            name: "iPhone 16 Pro",
            display: "6.3 inch Super Retina XDR",
            chip: "A18 Pro",
            storageOptions: ["128GB", "256GB", "512GB", "1TB"],
            colorOptions: {
                zh: ["黑色钛金属", "白色钛金属", "原色钛金属", "沙漠色钛金属"],
                en: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"]
            },
            releaseYear: 2024
        },
        "iPhone17,4": {
            name: "iPhone 16 Plus",
            display: "6.7 inch Super Retina XDR",
            chip: "A18",
            storageOptions: ["128GB", "256GB", "512GB"],
            colorOptions: {
                zh: ["黑色", "白色", "粉色", "蓝绿色", "群青色"],
                en: ["Black", "White", "Pink", "Teal", "Ultramarine"]
            },
            releaseYear: 2024
        },
        "iPhone17,3": {
            name: "iPhone 16",
            display: "6.1 inch Super Retina XDR",
            chip: "A18",
            storageOptions: ["128GB", "256GB", "512GB"],
            colorOptions: {
                zh: ["黑色", "白色", "粉色", "蓝绿色", "群青色"],
                en: ["Black", "White", "Pink", "Teal", "Ultramarine"]
            },
            releaseYear: 2024
        },
        "iPhone16,2": {
            name: "iPhone 15 Pro Max",
            display: "6.7 inch Super Retina XDR",
            chip: "A17 Pro",
            storageOptions: ["256GB", "512GB", "1TB"],
            colorOptions: {
                zh: ["黑色钛金属", "白色钛金属", "原色钛金属", "蓝色钛金属"],
                en: ["Black Titanium", "White Titanium", "Natural Titanium", "Blue Titanium"]
            },
            releaseYear: 2023
        },
        "iPhone16,1": {
            name: "iPhone 15 Pro",
            display: "6.1 inch Super Retina XDR",
            chip: "A17 Pro",
            storageOptions: ["128GB", "256GB", "512GB", "1TB"],
            colorOptions: {
                zh: ["黑色钛金属", "白色钛金属", "原色钛金属", "蓝色钛金属"],
                en: ["Black Titanium", "White Titanium", "Natural Titanium", "Blue Titanium"]
            },
            releaseYear: 2023
        },
        "iPhone15,5": {
            name: "iPhone 15 Plus",
            display: "6.7 inch Super Retina XDR",
            chip: "A16 Bionic",
            storageOptions: ["128GB", "256GB", "512GB"],
            colorOptions: {
                zh: ["黑色", "蓝色", "绿色", "黄色", "粉色"],
                en: ["Black", "Blue", "Green", "Yellow", "Pink"]
            },
            releaseYear: 2023
        },
        "iPhone15,4": {
            name: "iPhone 15",
            display: "6.1 inch Super Retina XDR",
            chip: "A16 Bionic",
            storageOptions: ["128GB", "256GB", "512GB"],
            colorOptions: {
                zh: ["黑色", "蓝色", "绿色", "黄色", "粉色"],
                en: ["Black", "Blue", "Green", "Yellow", "Pink"]
            },
            releaseYear: 2023
        },
        "iPhone15,3": {
            name: "iPhone 14 Pro Max",
            display: "6.7 inch Super Retina XDR",
            chip: "A16 Bionic",
            storageOptions: ["128GB", "256GB", "512GB", "1TB"],
            colorOptions: {
                zh: ["深紫色", "金色", "银色", "太空黑"],
                en: ["Deep Purple", "Gold", "Silver", "Space Black"]
            },
            releaseYear: 2022
        },
        "iPhone15,2": {
            name: "iPhone 14 Pro",
            display: "6.1 inch Super Retina XDR",
            chip: "A16 Bionic",
            storageOptions: ["128GB", "256GB", "512GB", "1TB"],
            colorOptions: {
                zh: ["深紫色", "金色", "银色", "太空黑"],
                en: ["Deep Purple", "Gold", "Silver", "Space Black"]
            },
            releaseYear: 2022
        },
        "iPhone14,8": {
            name: "iPhone 14 Plus",
            display: "6.7 inch Super Retina XDR",
            chip: "A15 Bionic",
            storageOptions: ["128GB", "256GB", "512GB"],
            colorOptions: {
                zh: ["蓝色", "紫色", "黄色", "午夜色", "星光色", "红色"],
                en: ["Blue", "Purple", "Yellow", "Midnight", "Starlight", "Red"]
            },
            releaseYear: 2022
        },
        "iPhone14,7": {
            name: "iPhone 14",
            display: "6.1 inch Super Retina XDR",
            chip: "A15 Bionic",
            storageOptions: ["128GB", "256GB", "512GB"],
            colorOptions: {
                zh: ["蓝色", "紫色", "黄色", "午夜色", "星光色", "红色"],
                en: ["Blue", "Purple", "Yellow", "Midnight", "Starlight", "Red"]
            },
            releaseYear: 2022
        },
        "iPhone14,5": {
            name: "iPhone 13",
            display: "6.1 inch Super Retina XDR",
            chip: "A15 Bionic",
            storageOptions: ["128GB", "256GB", "512GB"],
            colorOptions: {
                zh: ["粉色", "蓝色", "午夜色", "星光色", "红色", "绿色"],
                en: ["Pink", "Blue", "Midnight", "Starlight", "Red", "Green"]
            },
            releaseYear: 2021
        },
        "iPhone14,4": {
            name: "iPhone 13 mini",
            display: "5.4 inch Super Retina XDR",
            chip: "A15 Bionic",
            storageOptions: ["128GB", "256GB", "512GB"],
            colorOptions: {
                zh: ["粉色", "蓝色", "午夜色", "星光色", "红色", "绿色"],
                en: ["Pink", "Blue", "Midnight", "Starlight", "Red", "Green"]
            },
            releaseYear: 2021
        },
        "iPhone14,3": {
            name: "iPhone 13 Pro Max",
            display: "6.7 inch Super Retina XDR ProMotion",
            chip: "A15 Bionic",
            storageOptions: ["128GB", "256GB", "512GB", "1TB"],
            colorOptions: {
                zh: ["石墨色", "金色", "银色", "远峰蓝", "苍岭绿"],
                en: ["Graphite", "Gold", "Silver", "Sierra Blue", "Alpine Green"]
            },
            releaseYear: 2021
        },
        "iPhone14,2": {
            name: "iPhone 13 Pro",
            display: "6.1 inch Super Retina XDR ProMotion",
            chip: "A15 Bionic",
            storageOptions: ["128GB", "256GB", "512GB", "1TB"],
            colorOptions: {
                zh: ["石墨色", "金色", "银色", "远峰蓝", "苍岭绿"],
                en: ["Graphite", "Gold", "Silver", "Sierra Blue", "Alpine Green"]
            },
            releaseYear: 2021
        },
        "iPhone13,4": {
            name: "iPhone 12 Pro Max",
            display: "6.7 inch Super Retina XDR",
            chip: "A14 Bionic",
            storageOptions: ["128GB", "256GB", "512GB"],
            colorOptions: {
                zh: ["石墨色", "金色", "银色", "海蓝色"],
                en: ["Graphite", "Gold", "Silver", "Pacific Blue"]
            },
            releaseYear: 2020
        },
        "iPhone13,3": {
            name: "iPhone 12 Pro",
            display: "6.1 inch Super Retina XDR",
            chip: "A14 Bionic",
            storageOptions: ["128GB", "256GB", "512GB"],
            colorOptions: {
                zh: ["石墨色", "金色", "银色", "海蓝色"],
                en: ["Graphite", "Gold", "Silver", "Pacific Blue"]
            },
            releaseYear: 2020
        },
        "iPhone13,2": {
            name: "iPhone 12",
            display: "6.1 inch Super Retina XDR",
            chip: "A14 Bionic",
            storageOptions: ["64GB", "128GB", "256GB"],
            colorOptions: {
                zh: ["黑色", "白色", "红色", "绿色", "蓝色", "紫色"],
                en: ["Black", "White", "Red", "Green", "Blue", "Purple"]
            },
            releaseYear: 2020
        },
        "iPhone13,1": {
            name: "iPhone 12 mini",
            display: "5.4 inch Super Retina XDR",
            chip: "A14 Bionic",
            storageOptions: ["64GB", "128GB", "256GB"],
            colorOptions: {
                zh: ["黑色", "白色", "红色", "绿色", "蓝色", "紫色"],
                en: ["Black", "White", "Red", "Green", "Blue", "Purple"]
            },
            releaseYear: 2020
        },
        "iPhone14,6": {
            name: "iPhone SE (3rd generation)",
            display: "4.7 inch Retina HD",
            chip: "A15 Bionic",
            storageOptions: ["64GB", "128GB", "256GB"],
            colorOptions: {
                zh: ["午夜色", "星光色", "红色"],
                en: ["Midnight", "Starlight", "Red"]
            },
            releaseYear: 2022
        },
        "iPhone12,8": {
            name: "iPhone SE (2nd generation)",
            display: "4.7 inch Retina HD",
            chip: "A13 Bionic",
            storageOptions: ["64GB", "128GB", "256GB"],
            colorOptions: {
                zh: ["黑色", "白色", "红色"],
                en: ["Black", "White", "Red"]
            },
            releaseYear: 2020
        },
        "iPhone12,5": {
            name: "iPhone 11 Pro Max",
            display: "6.5 inch Super Retina XDR",
            chip: "A13 Bionic",
            storageOptions: ["64GB", "256GB", "512GB"],
            colorOptions: {
                zh: ["太空灰", "银色", "金色", "暗夜绿"],
                en: ["Space Gray", "Silver", "Gold", "Midnight Green"]
            },
            releaseYear: 2019
        },
        "iPhone12,3": {
            name: "iPhone 11 Pro",
            display: "5.8 inch Super Retina XDR",
            chip: "A13 Bionic",
            storageOptions: ["64GB", "256GB", "512GB"],
            colorOptions: {
                zh: ["太空灰", "银色", "金色", "暗夜绿"],
                en: ["Space Gray", "Silver", "Gold", "Midnight Green"]
            },
            releaseYear: 2019
        },
        "iPhone12,1": {
            name: "iPhone 11",
            display: "6.1 inch Liquid Retina HD",
            chip: "A13 Bionic",
            storageOptions: ["64GB", "128GB", "256GB"],
            colorOptions: {
                zh: ["黑色", "白色", "红色", "黄色", "绿色", "紫色"],
                en: ["Black", "White", "Red", "Yellow", "Green", "Purple"]
            },
            releaseYear: 2019
        }
    },

    /**
     * 通过 IMEI 查找设备信息
     * @param {string} imei - 15位 IMEI 号码
     * @returns {object|null} 设备信息或 null
     */
    lookupByIMEI(imei) {
        if (!imei || imei.length < 8) return null;

        // 获取 TAC (前8位)
        const tac = imei.substring(0, 8);
        const tacInfo = this.tacDatabase[tac];

        if (tacInfo) {
            const deviceInfo = this.deviceInfo[tacInfo.identifier];
            return {
                ...tacInfo,
                ...deviceInfo,
                source: 'tac'
            };
        }

        // 尝试前7位匹配
        const tac7 = imei.substring(0, 7);
        for (const [key, value] of Object.entries(this.tacDatabase)) {
            if (key.startsWith(tac7)) {
                const deviceInfo = this.deviceInfo[value.identifier];
                return {
                    ...value,
                    ...deviceInfo,
                    source: 'tac_partial'
                };
            }
        }

        return null;
    },

    /**
     * 通过序列号解析设备信息 (仅适用于2021年前的12位序列号)
     * @param {string} serial - 序列号
     * @returns {object|null} 解析结果或 null
     */
    parseSerial(serial) {
        if (!serial) return null;

        // 新款 iPhone (2021+) 使用随机10位序列号，无法解析
        if (serial.length === 10) {
            return {
                type: 'random',
                message: '此序列号为随机格式(iPhone 13及以后机型)，无法直接解析型号信息',
                serial: serial
            };
        }

        // 旧款 12位序列号可以解析部分信息
        if (serial.length === 12) {
            // 第1-3位: 工厂代码
            // 第4位: 制造年份 (C=2010/2020, D=2011/2021...)
            // 第5位: 制造周
            // 第9-11位: 型号代码
            // 第12位: 颜色/存储代码

            const factoryCode = serial.substring(0, 3);
            const yearCode = serial.charAt(3);
            const weekCode = serial.charAt(4);
            const modelCode = serial.substring(8, 11);

            return {
                type: 'structured',
                factoryCode,
                yearCode,
                weekCode,
                modelCode,
                serial
            };
        }

        return null;
    },

    /**
     * 获取默认存储容量
     * @param {string} identifier - 设备标识符
     * @returns {string} 默认存储容量
     */
    getDefaultStorage(identifier) {
        const device = this.deviceInfo[identifier];
        if (device && device.storageOptions) {
            return device.storageOptions[0];
        }
        return "128GB";
    },

    /**
     * 获取随机颜色
     * @param {string} identifier - 设备标识符
     * @param {string} lang - 语言 ('zh' 或 'en')
     * @returns {string} 颜色名称
     */
    getRandomColor(identifier, lang = 'zh') {
        const device = this.deviceInfo[identifier];
        if (device && device.colorOptions && device.colorOptions[lang]) {
            const colors = device.colorOptions[lang];
            return colors[Math.floor(Math.random() * colors.length)];
        }
        return lang === 'zh' ? '黑色' : 'Black';
    }
};

// 导出供浏览器使用
if (typeof window !== 'undefined') {
    window.DeviceDatabase = DeviceDatabase;
}

// 导出供 Node.js 使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DeviceDatabase;
}
