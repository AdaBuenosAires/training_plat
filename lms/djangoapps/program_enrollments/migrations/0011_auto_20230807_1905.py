# Generated by Django 3.2.20 on 2023-08-07 19:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('program_enrollments', '0010_add_courseaccessroleassignment'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='historicalprogramcourseenrollment',
            options={'get_latest_by': ('history_date', 'history_id'), 'ordering': ('-history_date', '-history_id'), 'verbose_name': 'historical program course enrollment', 'verbose_name_plural': 'historical program course enrollments'},
        ),
        migrations.AlterModelOptions(
            name='historicalprogramenrollment',
            options={'get_latest_by': ('history_date', 'history_id'), 'ordering': ('-history_date', '-history_id'), 'verbose_name': 'historical program enrollment', 'verbose_name_plural': 'historical program enrollments'},
        ),
    ]
