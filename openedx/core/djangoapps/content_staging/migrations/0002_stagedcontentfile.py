# Generated by Django 3.2.19 on 2023-06-02 00:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('content_staging', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='StagedContentFile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('filename', models.CharField(max_length=255)),
                ('data_file', models.FileField(blank=True, upload_to='staged-content-temp/')),
                ('source_key_str', models.CharField(blank=True, max_length=255)),
                ('md5_hash', models.CharField(blank=True, max_length=32)),
                ('for_content', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='files', to='content_staging.stagedcontent')),
            ],
        ),
    ]
