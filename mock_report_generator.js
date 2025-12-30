/**
 * Mock 验机报告生成器
 * 根据设备信息生成模拟的验机报告
 * 用于在没有实际验机数据时，提供统一格式的报告
 */

const MockReportGenerator = {
    // 多语言翻译
    translations: {
        zh: {
            title: 'iPhone 验机报告',
            subtitle: '专业设备检测与评估',
            basicInfo: '基本信息',
            model: '型号',
            storage: '存储容量',
            color: '颜色',
            serial: '序列号',
            imei: 'IMEI',
            imei2: 'IMEI 2',
            systemInfo: '系统信息',
            iosVersion: 'iOS 版本',
            buildNumber: '版本号',
            activationStatus: '激活状态',
            activated: '已激活',
            hardwareTest: '硬件检测',
            display: '显示屏',
            touchScreen: '触控屏',
            faceId: 'Face ID',
            touchId: 'Touch ID',
            rearCamera: '后置摄像头',
            frontCamera: '前置摄像头',
            speaker: '扬声器',
            microphone: '麦克风',
            wifi: 'WiFi',
            bluetooth: '蓝牙',
            cellular: '蜂窝网络',
            gps: 'GPS',
            battery: '电池',
            charging: '充电功能',
            buttons: '物理按键',
            vibrator: '振动马达',
            sensors: '传感器',
            normal: '正常',
            pass: '通过',
            batteryHealth: '电池健康度',
            cycleCount: '充电循环次数',
            originalParts: '原装配件',
            yes: '是',
            displayOriginal: '显示屏原装',
            batteryOriginal: '电池原装',
            conclusion: '检测结论',
            conclusionText: '该设备经检测，各项功能正常，硬件状态良好。',
            reportTime: '报告生成时间',
            disclaimer: '免责声明',
            disclaimerText: '本报告基于设备当前状态生成，仅供参考。实际使用情况可能因环境和使用方式而异。',
            mockNotice: '模拟报告说明',
            mockNoticeText: '此报告为系统根据设备型号自动生成的模拟报告。由于该设备尚未进行实际验机，报告中的检测数据为标准模板数据。如需获取真实验机报告，请联系我们进行设备检测。'
        },
        en: {
            title: 'iPhone Inspection Report',
            subtitle: 'Professional Device Diagnostics',
            basicInfo: 'Basic Information',
            model: 'Model',
            storage: 'Storage',
            color: 'Color',
            serial: 'Serial Number',
            imei: 'IMEI',
            imei2: 'IMEI 2',
            systemInfo: 'System Information',
            iosVersion: 'iOS Version',
            buildNumber: 'Build Number',
            activationStatus: 'Activation Status',
            activated: 'Activated',
            hardwareTest: 'Hardware Test',
            display: 'Display',
            touchScreen: 'Touch Screen',
            faceId: 'Face ID',
            touchId: 'Touch ID',
            rearCamera: 'Rear Camera',
            frontCamera: 'Front Camera',
            speaker: 'Speaker',
            microphone: 'Microphone',
            wifi: 'WiFi',
            bluetooth: 'Bluetooth',
            cellular: 'Cellular',
            gps: 'GPS',
            battery: 'Battery',
            charging: 'Charging',
            buttons: 'Physical Buttons',
            vibrator: 'Vibration Motor',
            sensors: 'Sensors',
            normal: 'Normal',
            pass: 'Pass',
            batteryHealth: 'Battery Health',
            cycleCount: 'Cycle Count',
            originalParts: 'Original Parts',
            yes: 'Yes',
            displayOriginal: 'Original Display',
            batteryOriginal: 'Original Battery',
            conclusion: 'Conclusion',
            conclusionText: 'This device has been tested and all functions are working properly with good hardware condition.',
            reportTime: 'Report Generated',
            disclaimer: 'Disclaimer',
            disclaimerText: 'This report is based on the current state of the device and is for reference only. Actual performance may vary depending on environment and usage.',
            mockNotice: 'Mock Report Notice',
            mockNoticeText: 'This is an auto-generated mock report based on device model. Since this device has not been physically inspected, the test data shown is template data. For an actual inspection report, please contact us for device testing.'
        },
        es: {
            title: 'Informe de Inspección iPhone',
            subtitle: 'Diagnóstico Profesional de Dispositivos',
            basicInfo: 'Información Básica',
            model: 'Modelo',
            storage: 'Almacenamiento',
            color: 'Color',
            serial: 'Número de Serie',
            imei: 'IMEI',
            imei2: 'IMEI 2',
            systemInfo: 'Información del Sistema',
            iosVersion: 'Versión iOS',
            buildNumber: 'Número de Compilación',
            activationStatus: 'Estado de Activación',
            activated: 'Activado',
            hardwareTest: 'Prueba de Hardware',
            display: 'Pantalla',
            touchScreen: 'Pantalla Táctil',
            faceId: 'Face ID',
            touchId: 'Touch ID',
            rearCamera: 'Cámara Trasera',
            frontCamera: 'Cámara Frontal',
            speaker: 'Altavoz',
            microphone: 'Micrófono',
            wifi: 'WiFi',
            bluetooth: 'Bluetooth',
            cellular: 'Red Celular',
            gps: 'GPS',
            battery: 'Batería',
            charging: 'Carga',
            buttons: 'Botones Físicos',
            vibrator: 'Motor de Vibración',
            sensors: 'Sensores',
            normal: 'Normal',
            pass: 'Aprobado',
            batteryHealth: 'Salud de Batería',
            cycleCount: 'Ciclos de Carga',
            originalParts: 'Piezas Originales',
            yes: 'Sí',
            displayOriginal: 'Pantalla Original',
            batteryOriginal: 'Batería Original',
            conclusion: 'Conclusión',
            conclusionText: 'Este dispositivo ha sido probado y todas las funciones funcionan correctamente con buen estado de hardware.',
            reportTime: 'Informe Generado',
            disclaimer: 'Aviso Legal',
            disclaimerText: 'Este informe se basa en el estado actual del dispositivo y es solo para referencia. El rendimiento real puede variar según el entorno y el uso.',
            mockNotice: 'Aviso de Informe Simulado',
            mockNoticeText: 'Este es un informe simulado generado automáticamente basado en el modelo del dispositivo. Dado que este dispositivo no ha sido inspeccionado físicamente, los datos de prueba mostrados son datos de plantilla. Para un informe de inspección real, contáctenos para la prueba del dispositivo.'
        }
    },

    // 获取最新的 iOS 版本（根据设备年份）
    getLatestIOSVersion(releaseYear) {
        const currentYear = new Date().getFullYear();
        const yearsOld = currentYear - releaseYear;

        // 模拟不同年份设备的典型 iOS 版本
        if (yearsOld <= 1) return { version: '18.2', build: '22C152' };
        if (yearsOld === 2) return { version: '18.1', build: '22B83' };
        if (yearsOld === 3) return { version: '17.6', build: '21G115' };
        if (yearsOld === 4) return { version: '17.5', build: '21F90' };
        return { version: '16.7', build: '20H115' };
    },

    // 生成随机电池健康度 (85-100%)
    generateBatteryHealth() {
        return Math.floor(Math.random() * 16) + 85; // 85-100
    },

    // 生成随机循环次数
    generateCycleCount(releaseYear) {
        const currentYear = new Date().getFullYear();
        const yearsOld = currentYear - releaseYear;
        const baseCycles = yearsOld * 150;
        return Math.floor(baseCycles + Math.random() * 100);
    },

    // 检查设备是否有 Face ID
    hasFaceID(identifier) {
        // iPhone X 及以后的非 SE 机型都有 Face ID
        const faceIDDevices = [
            'iPhone10,3', 'iPhone10,6', // iPhone X
            'iPhone11,2', 'iPhone11,4', 'iPhone11,6', 'iPhone11,8', // iPhone XS/XR
            'iPhone12,1', 'iPhone12,3', 'iPhone12,5', // iPhone 11 系列
            'iPhone13,1', 'iPhone13,2', 'iPhone13,3', 'iPhone13,4', // iPhone 12 系列
            'iPhone14,2', 'iPhone14,3', 'iPhone14,4', 'iPhone14,5', // iPhone 13 系列
            'iPhone14,7', 'iPhone14,8', 'iPhone15,2', 'iPhone15,3', // iPhone 14 系列
            'iPhone15,4', 'iPhone15,5', 'iPhone16,1', 'iPhone16,2', // iPhone 15 系列
            'iPhone17,1', 'iPhone17,2', 'iPhone17,3', 'iPhone17,4'  // iPhone 16 系列
        ];
        return faceIDDevices.includes(identifier);
    },

    // 生成 Mock 报告 HTML
    generateReportHTML(deviceInfo, imei, serial, lang = 'zh') {
        const t = this.translations[lang] || this.translations['zh'];
        const ios = this.getLatestIOSVersion(deviceInfo.releaseYear || 2023);
        const batteryHealth = this.generateBatteryHealth();
        const cycleCount = this.generateCycleCount(deviceInfo.releaseYear || 2023);
        const hasFaceID = this.hasFaceID(deviceInfo.identifier);
        const reportTime = new Date().toLocaleString(lang === 'zh' ? 'zh-CN' : (lang === 'es' ? 'es-ES' : 'en-US'));

        // 随机选择一个颜色
        const colorOptions = deviceInfo.colorOptions ? deviceInfo.colorOptions[lang] : null;
        const color = colorOptions ? colorOptions[Math.floor(Math.random() * colorOptions.length)] : (lang === 'zh' ? '黑色' : 'Black');

        // 随机选择存储容量
        const storage = deviceInfo.storageOptions ? deviceInfo.storageOptions[Math.floor(Math.random() * deviceInfo.storageOptions.length)] : '128GB';

        return `<!DOCTYPE html>
<html lang="${lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1024, user-scalable=yes">
    <title>${t.title} - ${deviceInfo.name || 'iPhone'}</title>
    <style>
        * { box-sizing: border-box; }
        body {
            font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
            line-height: 1.4;
            background-color: #f5f5f7;
            color: #1d1d1f;
            margin: 0;
            padding: 15px;
        }
        #report-container {
            max-width: 900px;
            margin: 20px auto;
            background-color: #ffffff;
            border: 1px solid #d2d2d7;
            box-shadow: 0 4px 16px rgba(0,0,0,0.08);
            border-radius: 12px;
            overflow: hidden;
        }
        .header {
            padding: 24px;
            background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
            text-align: center;
            color: white;
        }
        .header h1 {
            font-size: 28px;
            font-weight: 800;
            margin: 0 0 6px 0;
        }
        .header .subtitle {
            font-size: 14px;
            opacity: 0.8;
        }
        .content {
            padding: 24px 32px;
        }
        .mock-notice {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border: 1px solid #f59e0b;
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 24px;
        }
        .mock-notice h3 {
            color: #92400e;
            margin: 0 0 8px 0;
            font-size: 16px;
        }
        .mock-notice p {
            color: #78350f;
            margin: 0;
            font-size: 14px;
            line-height: 1.6;
        }
        h2 {
            font-size: 20px;
            font-weight: 700;
            color: #1d1d1f;
            margin: 24px 0 12px 0;
            padding-bottom: 8px;
            border-bottom: 2px solid #f5f5f7;
        }
        .info-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 16px;
        }
        .info-table td {
            padding: 12px 16px;
            border-bottom: 1px solid #f0f0f0;
        }
        .info-table td:first-child {
            font-weight: 600;
            color: #515154;
            width: 40%;
        }
        .info-table td:last-child {
            color: #1d1d1f;
        }
        .test-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin-bottom: 24px;
        }
        .test-item {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 12px 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .test-item .label {
            font-weight: 500;
            color: #515154;
        }
        .test-item .status {
            font-weight: 600;
            color: #059669;
        }
        .test-item .status::before {
            content: "✓ ";
        }
        .battery-section {
            background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
            border-radius: 8px;
            padding: 16px;
            margin: 16px 0;
        }
        .battery-health {
            font-size: 48px;
            font-weight: 800;
            color: #059669;
            text-align: center;
        }
        .battery-label {
            text-align: center;
            color: #065f46;
            font-weight: 600;
        }
        .conclusion {
            background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
            border-radius: 8px;
            padding: 16px;
            margin: 24px 0;
        }
        .conclusion h3 {
            color: #1e40af;
            margin: 0 0 8px 0;
        }
        .conclusion p {
            color: #1e3a8a;
            margin: 0;
        }
        .footer {
            padding: 16px 32px;
            background-color: #fafafa;
            border-top: 1px solid #e5e5e7;
            text-align: center;
            font-size: 12px;
            color: #86868b;
        }
        .disclaimer {
            margin-top: 24px;
            padding: 12px;
            background: #f8f9fa;
            border-radius: 6px;
            font-size: 12px;
            color: #6b7280;
        }
        @media (max-width: 768px) {
            .test-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (max-width: 480px) {
            .test-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div id="report-container">
        <div class="header">
            <h1>${t.title}</h1>
            <div class="subtitle">${t.subtitle}</div>
        </div>

        <div class="content">
            <!-- Mock 报告提示 -->
            <div class="mock-notice">
                <h3>⚠️ ${t.mockNotice}</h3>
                <p>${t.mockNoticeText}</p>
            </div>

            <!-- 基本信息 -->
            <h2>${t.basicInfo}</h2>
            <table class="info-table">
                <tr><td>${t.model}</td><td>${deviceInfo.name || 'iPhone'}</td></tr>
                <tr><td>${t.storage}</td><td>${storage}</td></tr>
                <tr><td>${t.color}</td><td>${color}</td></tr>
                <tr><td>${t.serial}</td><td>${serial || 'N/A'}</td></tr>
                <tr><td>${t.imei}</td><td>${imei || 'N/A'}</td></tr>
            </table>

            <!-- 系统信息 -->
            <h2>${t.systemInfo}</h2>
            <table class="info-table">
                <tr><td>${t.iosVersion}</td><td>iOS ${ios.version}</td></tr>
                <tr><td>${t.buildNumber}</td><td>${ios.build}</td></tr>
                <tr><td>${t.activationStatus}</td><td>${t.activated}</td></tr>
            </table>

            <!-- 硬件检测 -->
            <h2>${t.hardwareTest}</h2>
            <div class="test-grid">
                <div class="test-item"><span class="label">${t.display}</span><span class="status">${t.normal}</span></div>
                <div class="test-item"><span class="label">${t.touchScreen}</span><span class="status">${t.normal}</span></div>
                <div class="test-item"><span class="label">${hasFaceID ? t.faceId : t.touchId}</span><span class="status">${t.normal}</span></div>
                <div class="test-item"><span class="label">${t.rearCamera}</span><span class="status">${t.normal}</span></div>
                <div class="test-item"><span class="label">${t.frontCamera}</span><span class="status">${t.normal}</span></div>
                <div class="test-item"><span class="label">${t.speaker}</span><span class="status">${t.normal}</span></div>
                <div class="test-item"><span class="label">${t.microphone}</span><span class="status">${t.normal}</span></div>
                <div class="test-item"><span class="label">${t.wifi}</span><span class="status">${t.normal}</span></div>
                <div class="test-item"><span class="label">${t.bluetooth}</span><span class="status">${t.normal}</span></div>
                <div class="test-item"><span class="label">${t.cellular}</span><span class="status">${t.normal}</span></div>
                <div class="test-item"><span class="label">${t.gps}</span><span class="status">${t.normal}</span></div>
                <div class="test-item"><span class="label">${t.charging}</span><span class="status">${t.normal}</span></div>
                <div class="test-item"><span class="label">${t.buttons}</span><span class="status">${t.normal}</span></div>
                <div class="test-item"><span class="label">${t.vibrator}</span><span class="status">${t.normal}</span></div>
                <div class="test-item"><span class="label">${t.sensors}</span><span class="status">${t.normal}</span></div>
            </div>

            <!-- 电池信息 -->
            <h2>${t.battery}</h2>
            <div class="battery-section">
                <div class="battery-health">${batteryHealth}%</div>
                <div class="battery-label">${t.batteryHealth}</div>
            </div>
            <table class="info-table">
                <tr><td>${t.cycleCount}</td><td>${cycleCount}</td></tr>
                <tr><td>${t.batteryOriginal}</td><td>${t.yes}</td></tr>
            </table>

            <!-- 原装配件 -->
            <h2>${t.originalParts}</h2>
            <table class="info-table">
                <tr><td>${t.displayOriginal}</td><td>${t.yes}</td></tr>
                <tr><td>${t.batteryOriginal}</td><td>${t.yes}</td></tr>
            </table>

            <!-- 检测结论 -->
            <div class="conclusion">
                <h3>${t.conclusion}</h3>
                <p>${t.conclusionText}</p>
            </div>

            <!-- 免责声明 -->
            <div class="disclaimer">
                <strong>${t.disclaimer}:</strong> ${t.disclaimerText}
            </div>
        </div>

        <div class="footer">
            <p>${t.reportTime}: ${reportTime}</p>
        </div>
    </div>
</body>
</html>`;
    }
};

// 导出
if (typeof window !== 'undefined') {
    window.MockReportGenerator = MockReportGenerator;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MockReportGenerator;
}
