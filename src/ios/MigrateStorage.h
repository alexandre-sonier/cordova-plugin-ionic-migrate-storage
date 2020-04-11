#import <Cordova/CDVPlugin.h>

@interface MigrateStorage : CDVPlugin {}

- (void)pluginInitialize;
- (void)execute:(CDVInvokedUrlCommand*)command;

@end
