# Generated by Django 3.2.20 on 2023-08-30 15:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('content_tagging', '0004_system_defined_org'),
    ]

    operations = [
        migrations.DeleteModel(
            name='ContentOrganizationTaxonomy',
        ),
        migrations.DeleteModel(
            name='OrganizationModelObjectTag',
        ),
    ]
