import type { TurboModule } from "react-native/Libraries/TurboModule/RCTExport";
import { TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
  registerApp(appID: string, universalLink: string);
  getVersion(): Promise<string>;
  alipay(orderInfo: string): Promise<string>;
  setAlipayScheme(sScheme: string): void;
  authInfo(
    urlStr: string,
    useLanding: boolean,
    sBundleName: string,
    sModuleName: string,
    sAbilityName: string,
    callback: (para: unknown) => void
  ): Promise<void>;
}

export default TurboModuleRegistry.get<Spec>(
  "AlipayNativeModule"
) as Spec | null;
