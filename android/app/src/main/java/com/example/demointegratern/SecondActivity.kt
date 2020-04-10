package com.example.demointegratern

import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity

class SecondActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_second)
        val btnBackRNScreen = findViewById<Button>(R.id.btnBackRNScreen)
        btnBackRNScreen.setOnClickListener { finish() }
    }
}