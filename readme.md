4DLMFRM71LE124QQ3G927U2Q


reovery code


Step 5: Test the API with Flutter
In Flutter, you can use the http package to interact with these endpoints.

1. Send OTP Request from Flutter
dart
Copy code
import 'package:http/http.dart' as http;
import 'dart:convert';

Future<void> sendOtp(String mobileNumber) async {
  final response = await http.post(
    Uri.parse('http://localhost:3000/api/login/send-otp'),
    headers: {"Content-Type": "application/json"},
    body: jsonEncode({"usermobile": mobileNumber}),
  );

  if (response.statusCode == 200) {
    print("OTP sent successfully");
    print("Response: ${jsonDecode(response.body)}"); // This will contain OTP for testing
  } else {
    print("Failed to send OTP");
  }
}
2. Verify OTP from Flutter
dart
Copy code
Future<void> verifyOtp(String mobileNumber, String otp) async {
  final response = await http.post(
    Uri.parse('http://localhost:3000/api/login/verify-otp'),
    headers: {"Content-Type": "application/json"},
    body: jsonEncode({"usermobile": mobileNumber, "otp": otp}),
  );

  if (response.statusCode == 200) {
    print("OTP verified successfully");
  } else {
    print("Invalid or expired OTP");
  }
}





