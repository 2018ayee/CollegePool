#import <Foundation/Foundation.h>
#if __has_include("BraintreeCore.h")
#import "BraintreeCore.h"
#else
#import <BraintreeCore/BraintreeCore.h>
#endif

NS_ASSUME_NONNULL_BEGIN

/**
 Contains information about the 3D Secure status of a payment method
 */
@interface BTThreeDSecureInfo : NSObject

/**
 Create a `BTThreeDSecureInfo` object from JSON.
 */
- (instancetype)initWithJSON:(BTJSON *)json;

/**
 Cardholder authentication verification value or "CAVV" is the main encrypted message issuers and card networks use to verify authentication has occured. Mastercard uses an "AVV" message which will also be returned in the cavv parameter.
 */
@property (nonatomic, readonly, nullable) NSString *cavv;

/**
 Directory Server Transaction ID is an ID used by the card brand's 3DS directory server.
 */
@property (nonatomic, readonly, nullable) NSString *dsTransactionId;

/**
 The ecommerce indicator flag indicates the outcome of the 3DS authentication. Possible values are 00, 01, and 02 for Mastercard 05, 06, and 07 for all other cardbrands.
 */
@property (nonatomic, readonly, nullable) NSString *eciFlag;

/**
 Indicates whether a card is enrolled in a 3D Secure program or not. Possible values:
    `Y` = Yes
    `N` = No
    `U` = Unavailable
    `B` = Bypass
    `E` = RequestFailure
 */
@property (nonatomic, readonly, nullable) NSString *enrolled;

/**
 If the 3D Secure liability shift has occurred.
 */
@property (nonatomic, readonly, assign) BOOL liabilityShifted;

/**
 If the 3D Secure liability shift is possible.
 */
@property (nonatomic, readonly, assign) BOOL liabilityShiftPossible;

/**
 The 3D Secure status value.
 */
@property (nonatomic, readonly, nullable) NSString *status;

/**
 The 3DS version used in the authentication, example "1.0.2" or "2.1.0".
 */
@property (nonatomic, readonly, nullable) NSString *threeDSecureVersion;

/**
 Indicates if the 3D Secure lookup was performed.
 */
@property (nonatomic, readonly, assign) BOOL wasVerified;

/**
 Transaction identifier resulting from 3D Secure authentication. Uniquely identifies the transaction and sometimes required in the authorization message. This field will no longer be used in 3DS 2 authentications.
 */
@property (nonatomic, readonly, nullable) NSString *xid;

@end

NS_ASSUME_NONNULL_END
