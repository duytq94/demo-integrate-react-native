package com.example.demointegratern

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val btnGoRNScreen = findViewById<Button>(R.id.btnGoRNScreen)
        val edt = findViewById<EditText>(R.id.editText)
        btnGoRNScreen.setOnClickListener {
            val intent = Intent(this@MainActivity, RNModuleActivity::class.java)
            intent.putExtra("message_from_native", edt.text)
            startActivity(intent)
        }
    }
}