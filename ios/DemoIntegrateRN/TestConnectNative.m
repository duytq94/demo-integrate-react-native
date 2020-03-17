#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(TestConnectNative, NSObject)

RCT_EXTERN_METHOD(sendMessageToNative: (NSString)rnMessage)
RCT_EXTERN_METHOD(sendCallbackToNative: (RCTResponseSenderBlock)rnCallback)

@end
