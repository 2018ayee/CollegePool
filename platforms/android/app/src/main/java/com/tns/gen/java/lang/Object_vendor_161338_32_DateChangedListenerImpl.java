/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.java.lang;

public class Object_vendor_161338_32_DateChangedListenerImpl extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider,
        android.widget.DatePicker.OnDateChangedListener {
  public Object_vendor_161338_32_DateChangedListenerImpl() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public void onDateChanged(
      android.widget.DatePicker param_0, int param_1, int param_2, int param_3) {
    java.lang.Object[] args = new java.lang.Object[4];
    args[0] = param_0;
    args[1] = param_1;
    args[2] = param_2;
    args[3] = param_3;
    com.tns.Runtime.callJSMethod(this, "onDateChanged", void.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
