# Generated by Django 3.2.20 on 2023-08-08 09:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('demographics', '0003_auto_20200827_1949'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='historicaluserdemographics',
            options={'get_latest_by': ('history_date', 'history_id'), 'ordering': ('-history_date', '-history_id'), 'verbose_name': 'historical user demographic', 'verbose_name_plural': 'historical user demographic'},
        ),
    ]
