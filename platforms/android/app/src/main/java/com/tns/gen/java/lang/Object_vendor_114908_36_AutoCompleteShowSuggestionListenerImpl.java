/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.java.lang;

public class Object_vendor_114908_36_AutoCompleteShowSuggestionListenerImpl extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider,
        com.telerik.widget.autocomplete.ShowSuggestionListListener {
  public Object_vendor_114908_36_AutoCompleteShowSuggestionListenerImpl() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public void onShowSuggestionList(
      com.telerik.widget.autocomplete.RadAutoCompleteTextView param_0,
      java.util.List<com.telerik.widget.autocomplete.TokenModel> param_1) {
    java.lang.Object[] args = new java.lang.Object[2];
    args[0] = param_0;
    args[1] = param_1;
    com.tns.Runtime.callJSMethod(this, "onShowSuggestionList", void.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
