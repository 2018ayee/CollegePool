/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.com.google.firebase.auth;

public class PhoneAuthProvider_OnVerificationStateChangedCallbacks_vendor_110361_138_
    extends com.google.firebase.auth.PhoneAuthProvider.OnVerificationStateChangedCallbacks
    implements com.tns.NativeScriptHashCodeProvider {
  public PhoneAuthProvider_OnVerificationStateChangedCallbacks_vendor_110361_138_() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public void onVerificationCompleted(com.google.firebase.auth.PhoneAuthCredential param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onVerificationCompleted", void.class, args);
  }

  public void onVerificationFailed(com.google.firebase.FirebaseException param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onVerificationFailed", void.class, args);
  }

  public void onCodeSent(
      java.lang.String param_0,
      com.google.firebase.auth.PhoneAuthProvider.ForceResendingToken param_1) {
    java.lang.Object[] args = new java.lang.Object[2];
    args[0] = param_0;
    args[1] = param_1;
    com.tns.Runtime.callJSMethod(this, "onCodeSent", void.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
