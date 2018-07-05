from django.db import models

# Create your models here.
class Team(models.Model):
    name = models.CharField(max_length=100)
    responsible = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    activated = models.BooleanField(default=False)
    badge_one = models.BooleanField(default=False)
    badge_two = models.BooleanField(default=False)
    badge_three = models.BooleanField(default=False)
    badge_four = models.BooleanField(default=False)

class Distance(models.Model):
    meters = models.IntegerField()
    team = models.ForeignKey(Team, related_name='distance',on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['created_at']

    def __unicode__(self):
        return '%d: %d' % (self.pk, self.meters)
    def __str__(self):
        return f"{self.created_at}: {self.meters}"
