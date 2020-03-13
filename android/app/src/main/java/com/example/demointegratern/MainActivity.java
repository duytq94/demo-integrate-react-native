package com.example.demointegratern;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button btnGoRNScreen = findViewById(R.id.btnGoRNScreen);
        final EditText edt = findViewById(R.id.editText);
        btnGoRNScreen.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, RNModuleActivity.class);
                intent.putExtra("message_from_native", edt.getText());
                startActivity(intent);
            }
        });
    }
}
